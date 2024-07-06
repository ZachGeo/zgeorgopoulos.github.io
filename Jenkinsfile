pipeline {
    agent any
    environment {
        commitHash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
    }
    parameters {
        string (defaultValue: 'master', 
            description: 'Branch to build', name: 'BRANCH')
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh "docker build -t portfolio-web ."
            }
        }
        stage('Run') {
            steps {
                sh "docker run -it --rm -d -p 8081:80 --name portfolio-web portfolio-web"
            }
        }
        stage('Test') {
            steps {
                sh '''
                    #!/bin/bash
                    if [ $(curl --fail -LI localhost:8081 -o /dev/null -w '%{http_code}\n' -s) == 200]; then
                        echo "Web portfolio is running"
                    fi
                '''
            }
        }
        stage('CleanUp Container') {
            steps {
                sh "docker stop portfolio-web"
            }
        }
        stage('Push to Dockerhub'){
            steps {
                withCredentials([usernamePassword(credentialsId:'dockerhub-credentials', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh 'echo $dockerHubPassword | docker login -u $dockerHubUser --password-stdin'
                    sh "docker image tag portfolio-web portfolio-web:${commitHash}"
                    sh "docker push portfolio-web:${commitHash}"
                }
            }
        }
    }
}
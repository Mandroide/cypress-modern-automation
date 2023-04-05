pipeline {
    agent {
        docker {
            image 'cypress/base:latest'
        }
    }
    stages {
        stage('build and test') {
            environment {
                CYPRESS_RECORD_KEY = credentials("cypress-automation-record-key")
            }
            steps {
                sh "npm ci"
                sh "npm run "
            }
        }
    }
}
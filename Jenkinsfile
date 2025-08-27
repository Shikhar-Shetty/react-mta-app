pipeline {
    agents any
    stages {
        stage("Clean Workspace") {
            steps {
                cleanWs()
                echo 'Workspace cleaned before checkout.'
            }
        }
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("Docker build & Run") {
            steps {
                sh "docker build -t etherealfrost019/mta-app:${BUILD_NUMBER} ."
                sh "docker push etherealfrost019/mta-app:${BUILD_NUMBER}"
            }
        }
    }
    post {
        always { echo 'Finished Pipeline' }
        success { echo 'Successful Pipeline Execution' }
        failure { echo 'Failed Execution of pipeline' }
    }
}
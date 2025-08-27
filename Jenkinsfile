pipeline {
    agent any
    stages {
        stage("Clean Workspace") {
            steps {
                cleanWs()
                echo 'Workspace cleaned before checkout.'
                echo "Don't you want me like i want you baby, all you gotta do is meet me at the APT-APT APT-APT APT-APT"
            }
        }
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("Docker build & Run") {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "dockerHubCred",
                    usernameVariable: "dockerHubUser",
                    passwordVariable: "dockerHubPass"
                )]) {
                    sh "docker login -u $dockerHubUser -p $dockerHubPass"
                    sh "docker build -t $dockerHubUser/mta-app:${BUILD_NUMBER} ."
                    sh "docker push $dockerHubUser/mta-app:${BUILD_NUMBER}"
                }
            }
        }
    }
    post {
        always { echo 'Finished Pipeline' }
        success { echo 'Successful Pipeline Execution' }
        failure { echo 'Failed Execution of pipeline' }
    }
}
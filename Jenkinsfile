pipeline{
    agent any
    stages{
        stage("Test"){
            steps{
                echo('This is the Test stage')
            }
        }
        stage("Build stage"){
            steps{
                echo('This is the build stage')
                sh '''
                   ssh -i /var/lib/jenkins/webserver.pem -t -o StrictHostKeyChecking=no ubuntu@ec2-3-84-163-78.compute-1.amazonaws.com
                   sudo rm -rf ~/node_app
                   mkdir ~/node_app
                   cd ~/node_app
                   sudo git init
                   sudo git remote add origin https://github.com/Fearreece/simple_server.git
                   sudo git pull origin main
                   sudo npm install
                   sudo npm start
                '''
            }
        } 

    }
}
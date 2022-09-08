pipeline{
    agent any
    tools {nodejs 'node'}
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
                   cd /var/www/html
                   pm2 kill
                   sudo git init
                   sudo git remote add origin https://github.com/Fearreece/simple_server.git
                   sudo git pull origin main
                   sudo npm install
                    PORT=80 pm2 start server.js 
                '''
            }
        } 

    }
}
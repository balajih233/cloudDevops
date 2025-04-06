pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/balajih233/cloudDevops.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'apt update && apt install -y python3 python3-pip ansible'
            }
        }

        stage('Run Ansible Playbook') {
            steps {
                sh 'ansible-playbook -i inventory ansible-playbook.yml'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['jenkins-ssh-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@34.229.144.215 <<EOF
                    cd /var/www/webapp-automation
                    systemctl restart webapp
                    EOF
                    '''
                }
            }
        }
    }
}
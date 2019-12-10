pipeline {
    agent { label 'slave' }
    
   stages {
      stage('checkout') {
         steps {
            git 'https://github.com/Nocral/insa.git'
         }
      }
      
      stage('setup') {
         steps {
            dir('poneys') {
                sh './install_composer.sh'
                sh 'php composer.phar install'
            }
         }
      }
      
      stage('tests') {
          steps {
              dir('poneys') {
                sh './vendor/bin/phpunit tests/PoneysTest.php'
            }
              xunit (
                tresholds: [
                    skipped(failuresThreshold:'0'),
                    failed(failuresThreshold:'0')
                ],
                tools: [ PHPUnit(pattern: 'poneys/logfile.xml') ])
          }
      }
    }
}

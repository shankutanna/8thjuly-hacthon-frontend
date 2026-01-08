pipeline {
  agent any

  stages {
    stage('Validate Cluster') {
      steps {
        sh 'kubectl get nodes'
      }
    }

    stage('Select Environment') {
      steps {
        script {
          if (env.BRANCH_NAME == 'main') {
            env.TARGET_ENV = 'prod'
          } else if (env.BRANCH_NAME == 'develop') {
            env.TARGET_ENV = 'dev'
          } else {
            env.TARGET_ENV = 'test'
          }
        }
        echo "Deploying to ${env.TARGET_ENV}"
      }
    }

    stage('Deploy Placeholder') {
      steps {
        sh '''
          kubectl get ns ${TARGET_ENV}
          echo "Application deployment will go here"
        '''
      }
    }
  }
}

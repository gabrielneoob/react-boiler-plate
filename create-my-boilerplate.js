#!/usr/bin/env node

import { execSync } from 'child_process'
import path from 'path'

const projectName = process.argv[2]

if (!projectName) {
  console.error('Por favor, especifique o nome do projeto:')
  console.error('  npx @gabrielneoob/create-react-boilerplate nome-do-projeto')
  process.exit(1)
}

const repoURL = 'gabrielneoob/react-boiler-plate' // Substitua pelo usuário e nome do repositório

try {
  // Clona o repositório usando degit
  execSync(`npx degit ${repoURL} ${projectName}`, { stdio: 'inherit' })

  // Navega até o novo diretório e inicializa o Git
  process.chdir(path.join(process.cwd(), projectName))
  execSync('git init', { stdio: 'inherit' })
  console.log('Projeto criado com sucesso!')

  console.log(`Para começar, entre no diretório do projeto:
  cd ${projectName}`)
} catch (error) {
  console.error('Erro ao criar o projeto:', error.message)
}

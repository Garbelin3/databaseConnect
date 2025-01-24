import {sequelize} from './config/database.js';
import {Usuario} from './models/usuario.js'

const id = 6;

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');    
  await Usuario.sync()
      
  const novoUsuario = await Usuario.create({
  nome: 'eduarda',
  email: 'eduarda@example.com',
  senha: 'eduarda123',
  });
  console.log('Usuário criado:', novoUsuario.toJSON());

  const usuarios = await Usuario.findAll();
  console.log('Lista de Usuários:', usuarios.map((u) => u.toJSON()));

  
  const usuario = await Usuario.findByPk(id);
  await usuario.update({senha: 'senha_forte'});
  console.log('Usuário atualizado com sucesso:', usuario.toJSON());

  const deletarUsuario = await Usuario.findByPk(id);
  await usuario.destroy();
  console.log("Usuário excluído.");

  } catch (error) {
      console.error('Não foi possível conectar na database:', error);
  } finally {
    sequelize.close();
}


import React from 'react';
import { mount } from '@cypress/react';
import TodoInfo from './TodoInfo';

describe('TodoInfo', () => {
  describe('Comportamento básico', () => {
    beforeEach(() => {
      const user1 = {
        id: 1,
        name: 'Leanne Graham',
      };

      const todo = {
        id: 1,
        title: 'Learn HTML',
        completed: true,
        user: user1,
      };

      mount(<TodoInfo todo={todo} />);
    });

    it('exibe o título correto', () => {
      cy.get('.TodoInfo__title').should('have.text', 'Learn HTML');
    });

    it('adiciona classe de completed', () => {
      cy.get('.TodoInfo').should('have.class', 'TodoInfo--completed');
    });

    it('exibe informações do usuário', () => {
      cy.get('.UserInfo').should('contain', 'Leanne Graham');
    });
  });
});

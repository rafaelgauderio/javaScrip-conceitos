/*
-> DESIGN PATTERNS
	-> DEFINIÇÃO
		-> Padrões de projetos são soluções generalistas para problemas recorrentes durante 
			o desenvolvimento de um software. Não se trata de um framework ou código pronto, mas 
			de uma definição de alto nível de com um problema pode ser solucionado.
		-> A Patter language
			-> Cristopher Alexander, Sara Ishikawa e Murray Silverstein
			-> 253 tipos de problemas/desafios de projetos
			-> Formato de um pattern
				-> Nome
				-> Exemplo
				-> Contexto
				-> Problema
				-> Solução

		-> Using Pattern Languages for Object-Oriented Programs
			-> 1987
			-> Kent Beck e Ward Cunningham
			-> 5 Padrões de projetos

		-> Desing Patterns: Elements of Reusable Onject-Oriented Software
			-> 1994
			-> Gang of four (GoF)
			-> Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides


	-> TIPOS
		-> Criação : aqueles que abstraem o processo de criação dos objetos. Ajudam a tornar um
					sistema independente de seus de como seus objetos  são criados, compostos e representados
					tipos: Abstract Factory, Builder, Factory Method, Prototype, Singleton		

		-> Estruturais: Se procuram com a forma como classes e objetos são compostos para formar 
					estruturas maiores.
					tipos: Adapter, Bridge, Composite, Decorator, Facade, Business Delegate,
							flyweight, Proxy

		-> Comportamentais: Se concentram nos algoritmos e atribuições de responsabilidades entre os objetos.
					Eles apenas padrões´entre objetos e classes, mas também os padrões de comunicação entre 
					os objetos.
					tipos: Chain of Responsibility, Command, iterpreter, iterator, mediator, observer, state,
					strategy, template method, visitor

	-> PATTERNS MAIS UTILIZADOS
		-> Factory : retornam objeto sem necessidae de new
		-> Singleton : criar um única instância de uma função construtora e retorna-la toda que vez que necessário
						https://jquery.com
		-> Decorator : Recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la
						explicitamente. 
		-> Observer : Uma instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos
						eles quando ocorrem mudanças de estado. Vue. RxJs
		-> Module : Possibilita organizar melhor o nosso código, sem a necessidade de expor variáveis globais
*/

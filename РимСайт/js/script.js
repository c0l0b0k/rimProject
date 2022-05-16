
(function($) {
	$(function() {
		
		var puzzleData = [
			 	{
			 	    clue: "Подстройка, которая проявляется в выбытии сотрудников и новых трудоустройствах",
					answer: "количественная",
					position: 1,
					orientation: "across",
					startx: 3,
					starty: 2
			 	},
                {
                    clue: "Приспособление экономической си-стемы и ее отдельных субъектов, работников, к изме-няющимся условиям внешней среды, производства, труда, обмена, жизни",
                    answer: "адаптация",
					position: 2,
					orientation: "across",
					startx: 13,
					starty: 4
                },
                {
                    clue: "( ? ) коронавируса - резкое увеличение количества заболевших",
                    answer: "волна",
                    position: 3,
                    orientation: "across",
                    startx: 8,
                    starty: 5
                },
                 {
                     clue: "Город, в котором впервые обнаружили ковид-19",
                     answer: "ухань",
                     position: 4,
                     orientation: "across",
                     startx: 5,
                     starty: 10
                 },
                {
                    clue: "Учение о взаимосвязи и взаимной определённости всех явлений и процессов",
                    answer: "детерминизм",
                    position: 5,
                    orientation: "across",
                    startx: 7,
                    starty: 12
                },
                {
                    clue: "Повышение общего уровня цен на товары и услуги",
                    answer: "инфляция",
                    position: 6,
                    orientation: "down",
                    startx: 19,
                    starty: 12
                },
                {
                    clue: "Прекращение трудовых отношений по любым причинам - экономическим, дисциплинарным, по собственному желанию, соглашению сторон, в связи с выходом на пенсию и так далее",
                    answer: "выбытие",
                    position: 7,
                    orientation: "across",
                    startx: 8,
                    starty: 18
                },
                {
                    clue: "Ограничения, которые государства или их субъекты вводят во время эпидемии коронавируса, чтобы он медленнее распространялся",
                    answer: "локдаун",
                    position: 8,
                    orientation: "down",
                    startx: 5,
                    starty: 2
                },
                {
                    clue: "Эпидемия, действующая повально на все население",
                    answer: "пандемия",
                    position: 9,
                    orientation: "across",
                    startx: 12,
                    starty: 16
                },
                {
                    clue: "Сектор труда, находящийся на втором месте по степени удара по заработной плате работников",
                    answer: "строительство",
                    position: 10,
                    orientation: "down",
                    startx: 9,
                    starty: 2
                },
                {
                    clue: "Операция, обеспечивающая перевод экономических показателей, рассчитанных в текущих ценах, в сопоставимые постоянные цены",
                    answer: "дефлирование",
                    position: 11,
                    orientation: "down",
                    startx: 13,
                    starty: 8
                },
                {
                    clue: "Подстройка, которая преобладала на рынке труда в 2020 году",
                    answer: "заработная",
                    position: 12,
                    orientation: "down",
                    startx: 15,
                    starty: 1
                },
                {
                    clue: "Характер изменения экономических показателей во времени, определяемый путем составления и анализа рядов таких показателей",
                    answer: "динамика",
                    position: 1,
                    orientation: "down",
                    startx: 20,
                    starty: 3
                },
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
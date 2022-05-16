
(function($) {
	$(function() {
		
		var puzzleData = [
			 	{
			 	    clue: "����������, ������� ����������� � ������� ����������� � ����� ����������������",
					answer: "��������������",
					position: 1,
					orientation: "across",
					startx: 3,
					starty: 2
			 	},
                {
                    clue: "�������������� ������������� ��-����� � �� ��������� ���������, ����������, � ����-�������� �������� ������� �����, ������������, �����, ������, �����",
                    answer: "���������",
					position: 2,
					orientation: "across",
					startx: 13,
					starty: 4
                },
                {
                    clue: "( ? ) ������������ - ������ ���������� ���������� ����������",
                    answer: "�����",
                    position: 3,
                    orientation: "across",
                    startx: 8,
                    starty: 5
                },
                 {
                     clue: "�����, � ������� ������� ���������� �����-19",
                     answer: "�����",
                     position: 4,
                     orientation: "across",
                     startx: 5,
                     starty: 10
                 },
                {
                    clue: "������ � ����������� � �������� ������������� ���� ������� � ���������",
                    answer: "�����������",
                    position: 5,
                    orientation: "across",
                    startx: 7,
                    starty: 12
                },
                {
                    clue: "��������� ������ ������ ��� �� ������ � ������",
                    answer: "��������",
                    position: 6,
                    orientation: "down",
                    startx: 19,
                    starty: 12
                },
                {
                    clue: "����������� �������� ��������� �� ����� �������� - �������������, ��������������, �� ������������ �������, ���������� ������, � ����� � ������� �� ������ � ��� �����",
                    answer: "�������",
                    position: 7,
                    orientation: "across",
                    startx: 8,
                    starty: 18
                },
                {
                    clue: "�����������, ������� ����������� ��� �� �������� ������ �� ����� �������� ������������, ����� �� ��������� ���������������",
                    answer: "�������",
                    position: 8,
                    orientation: "down",
                    startx: 5,
                    starty: 2
                },
                {
                    clue: "��������, ����������� �������� �� ��� ���������",
                    answer: "��������",
                    position: 9,
                    orientation: "across",
                    startx: 12,
                    starty: 16
                },
                {
                    clue: "������ �����, ����������� �� ������ ����� �� ������� ����� �� ���������� ����� ����������",
                    answer: "�������������",
                    position: 10,
                    orientation: "down",
                    startx: 9,
                    starty: 2
                },
                {
                    clue: "��������, �������������� ������� ������������� �����������, ������������ � ������� �����, � ������������ ���������� ����",
                    answer: "������������",
                    position: 11,
                    orientation: "down",
                    startx: 13,
                    starty: 8
                },
                {
                    clue: "����������, ������� ����������� �� ����� ����� � 2020 ����",
                    answer: "����������",
                    position: 12,
                    orientation: "down",
                    startx: 15,
                    starty: 1
                },
                {
                    clue: "�������� ��������� ������������� ����������� �� �������, ������������ ����� ����������� � ������� ����� ����� �����������",
                    answer: "��������",
                    position: 1,
                    orientation: "down",
                    startx: 20,
                    starty: 3
                },
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
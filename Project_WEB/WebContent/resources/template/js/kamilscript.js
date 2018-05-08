function exportChartInPDF() {
	var docDefinition = {
	         content: [
		   'Statistics of notes done, created and in_progress',
		   {
		      image: $(PF('lineWV').exportAsImage()).attr('src')
		   }		
		 ]
	      }
      pdfMake.createPdf(docDefinition).open();
      pdfMake.createPdf(docDefinition).download('notesStatisticsChart.pdf');
   }
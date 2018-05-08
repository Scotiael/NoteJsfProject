function exportChartInPDF() {
	var docDefinition = {
	         content: [
		   {
		      image: $(PF('lineWV').exportAsImage()).attr('src')
		   }		
		 ]
	      }
      pdfMake.createPdf(docDefinition).open();
      pdfMake.createPdf(docDefinition).download('notesStatisticsChart.pdf');
   }
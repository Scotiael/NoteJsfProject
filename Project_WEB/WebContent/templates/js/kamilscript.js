function exportChartInPDF() {
	
	var docDefinition = {
	         content: [
		   {
		      image: $(PF('chaart').exportAsImage()).attr('src'),
		      width:400,
		      height:300
		   }		
		 ]
	    }
	console.warn("Test " + $(PF('chaart').exportAsImage()).attr('src'));
      pdfMake.createPdf(docDefinition).open();
      pdfMake.createPdf(docDefinition).download('notesStatisticsChart.pdf');
      
   }
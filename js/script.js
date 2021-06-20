

       $(document).ready(function(){

       	//draggable
       	 $( "#draggable" ).draggable();

       	 //accordion
       	 $( "#accordion" ).accordion({
       	 	collapsible: true

       	 });

       	 //autocomplete
      var datalist = [
      "Web Development",
      "UI Design",
      "Digital Marketing",
      "Graphics Design"
      
    ];
    $( "#data" ).autocomplete({
      source: datalist
    });


     });
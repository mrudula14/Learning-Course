var app= angular.module('maincontroller',[]);
app.controller('LearnCourse', function ($scope) {
	$scope.course={
				name:"Algebra",
				topics:
					[   
						{
		   					id: 01,
							name:"Topic 1",
							lessons:
		  						[
				   					
								],

		   					proficiency:"easy"
		  				},
						{
							id: 02,
							name:"Topic 2",
							lessons:
							  	[
							  	],

							proficiency:"easy"
						},
						{
		                    id: 01,
						    name:"Topic 3",
						    lessons:
		  						[
									
		  						],

		   					proficiency:"medium"
		 				}
	 
	 
					]
			};
	$scope.getProficiencyList = function(){
		return ["easy","medium","hard"];
	}
	$scope.getSubjects = function(){
		return ["Math","English","Computers"];
	}
	$scope.getGrades = function(){
		return [1,2];
	}	
	$scope.getLessons=function(){
		serverResponse=[
			{
				id : 1, 
				image: "course_image.jpg",
				title : "Lorem Ipsum", 
				subject : "Math", 
				grade : 2, 
				noOfVideos : 1, 
				noOfDocuments : 1,
				noOfQuestions : 2
			},
			{   
				id : 2, 
				image: "course_image.jpg",
				title : "Adv LoremIpsum", 
				subject : "Math", 
				grade : 1, 
				noOfVideos : 1,
				noOfDocuments : 0, 
				noOfQuestions : 1
			},
			{ 
				id : 3, 
				image: "course_image.jpg",
				title : "Lorem Ipsum", 
				subject : "English", 
				grade : 2, 
				noOfVideos : 0, 
				noOfDocuments : 1,
				noOfQuestions : 1
			},
			{ 
				id : 4, 
				image: "course_image.jpg",
				title : "Lorem Ipsum", 
				subject : "Science", 
				grade : 1, 
				noOfVideos : 1, 
				noOfDocuments : 1,
				noOfQuestions : 2
			},
			{ 
				id : 5, 
				image: "course_image.jpg",
				title : "Lorem Ipsum", 
				subject : "Computers", 
				grade : 2, 
				noOfVideos : 1, 
				noOfDocuments :1, 
				noOfQuestions : 1
			}
		];
		return serverResponse;
	}
 	
 	$scope.subjects=$scope.getSubjects();
 	$scope.proficiency=$scope.getProficiencyList();
	$scope.grades=$scope.getGrades();
	$scope.lessons=$scope.getLessons();

	$scope.update=function() {
		var lessonList=[];
		var index;
		allLessons=$scope.getLessons();
		if ( $scope.selectedSubject == undefined && $scope.selectedGrade == undefined ){
			$scope.lessons=allLessons;
			return;
		}

		for( index in allLessons){
			lesson = allLessons[index];
			if(  $scope.selectedSubject === lesson.subject && $scope.selectedGrade === lesson.grade){
				
				lessonList.push(lesson);
			}
			else if(  ($scope.selectedSubject === lesson.subject && $scope.selectedGrade == undefined )
					|| ( $scope.selectedGrade === lesson.grade  && $scope.selectedSubject == undefined )){
				lessonList.push( lesson);
			}
			

			  
			
		}
		
		$scope.lessons=lessonList;
		
	}
	
  
 //   $scope.user = {
	// name: 'awesome user'
	// 			}; 
    $scope.onDragSuccess=function(data,evt){
	   console.log("drag success, data:", data);

	}
	$scope.onDropComplete=function(data,evt,lessons){
		console.log("drop success, data:", data);
		console.log(lessons)
		index = lessons.indexOf(data);
		if ( index == -1){
			lessons.push(data);
		}else{
			alert("Lesson already exist , can not be added again to same topic");
		}
	} 

	$scope.deleteWish=function(lesson,lessons){
		console.log("Deleting",lesson);
		
		var index=lessons.indexOf(lesson);
		if( index > -1){

			lessons.splice(index,1);
		}
	}


});
var app= angular.module('maincontroller',[]);
app.controller('LearnCourse', function ($scope) {
	$scope.allLessons=
		[
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
				title : "Advanced LoremIpsum", 
				subject : "Math", 
				grade : 2, 
				noOfVideos : 1,
				noOfDocuments : 0, 
				noOfQuestions : 1
			},
			{ 
				id : 3, 
				image: "course_image.jpg",
				title : "Lorem Ipsum", 
				subject : "English", 
				grade : 1, 
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
 	$scope.proficiency=["easy","medium","hard"];
		
	$scope.lessons=$scope.allLessons;


	$scope.update=function() {
		var lessonList=[];
		var index;
		if ( $scope.selectedSubject == undefined && $scope.selectedGrade == undefined ){
			$scope.lessons=$scope.allLessons;
			return;
		}

		for( index in $scope.allLessons){
			lesson = $scope.allLessons[index];
			if(  $scope.selectedSubject === lesson.subject && $scope.selectedGrade === lesson.grade){
				
				lessonList.push(lesson);
			}
			else if(  ($scope.selectedSubject === lesson.subject && $scope.selectedGrade == undefined )
					|| ( $scope.selectedGrade === lesson.grade  && $scope.selectedSubject == undefined )){
				lessonList.push( lesson);
			}
			

			  
			
		}
		
		$scope.lessons=lessonList;
		// body...
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
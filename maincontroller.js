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
				title : "Advanced Lorem Ipsum", 
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
							name:"Topic Name1",
							lessons:
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
										title : "Advanced Lorem Ipsum", 
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
								],

		   					proficiency:"easy"
		  				},
						{
							id: 02,
							name:"Topic Name2",
							lessons:
							  	[
							 	 	{
										id : 1, 
										image: "course_image.jpg",
										title : "Lorem Ipsum", 
										subject : "Math", 
										grade : 1, 
										noOfVideos : 1, 
										noOfDocuments : 1,
										noOfQuestions : 2
												
									}

							  	],

							proficiency:"hard"
						},
						{
		                    id: 01,
						    name:"Topic Name3",
						    lessons:
		  						[
									{
										id : 1, 
										image: "course_image.jpg",
										title : "Lorem Ipsum", 
										subject : "Math",
										grade : 1, 
										noOfVideos : 1, 
										noOfDocuments : 1,
										noOfQuestions : 2 
									
									},{
										id : 2, 
										image: "course_image.jpg",
										title : "Lorem Ipsum", 
										subject : "Math",
										grade : 1, 
										noOfVideos : 1, 
										noOfDocuments : 1,
										noOfQuestions : 2 
									
									}
		  						],

		   					proficiency:"easy"
		 				}
	 
	 
					]
			};

		
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
   $scope.onDragComplete=function(data,evt){
	   console.log("drag success, data:", data);
	}
	$scope.onDropComplete=function(data,evt){
		console.log("drop success, data:", data);
	} 



});
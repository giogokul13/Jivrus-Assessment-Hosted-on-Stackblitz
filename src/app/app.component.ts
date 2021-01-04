import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  iscoursedisplay = false;
  isstudentdisplayed = false;
  isCourseSelected = true;
  coursearray = [];
  studentarray = [];
  courseName;
  courseSelect;
  studentName;
  studentDname: Object;
  courseDname: Object;
  cidcount = 0;
  sidcount = 0;
  selectedCourse: any;
  constructor() {}
  // to show textbox of  addcourse

  addcourse() {
    this.iscoursedisplay = true;
  }

  //to show the textbox  of  add student

  addstudent() {
    this.isstudentdisplayed = true;
  }

  //to get the selected coursename

  selectChangeCourse(courseSelect: any) {
    this.isCourseSelected = false;
    // console.log('course selected');
    this.selectedCourse = courseSelect;
    console.log(this.selectedCourse);
  }

  // hide course add area X

  chide() {
    this.iscoursedisplay = false;
  }

  // hide student add area X

  shide() {
    this.isstudentdisplayed = false;
  }

  // add new course to the dropdown

  addcourselist() {
    this.courseDname = {
      id: this.cidcount,
      course: this.courseName
    };
    this.cidcount++;
    this.coursearray.push(this.courseDname);
    console.log(this.coursearray);
    this.courseName = " ";
    this.chide();
  }

  // add new student to the dropdown

  addstudentlist() {
    this.studentDname = {
      id: this.sidcount,
      courseid: this.selectedCourse,
      student: this.studentName
    };
    this.studentarray.push(this.studentDname);
    this.sidcount++;
    console.log(this.studentarray);
    this.studentName = " ";
    this.shide();
  }

  ngOnInit(): void {}
}

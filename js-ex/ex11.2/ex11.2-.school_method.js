const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],

    // 1. A method called “findPerson” that takes two arguments,
    //     a type(either a student or teacher), and an id.
    // It will return a particular object of that person.



    findPerson(type, id) {
        let temp = type.toLowerCase();
        let object = this;
        if (temp === "students" || temp === "teachers") {

            if (temp in object) {

                return object[temp].filter(e => e.id === id)[0];
            }
        }

        return undefined;
    },

    // 2. A method called “assignStudent” that takes two
    // arguments, a student’s id and a subject.
    // Assign all of the students to the first available teacher who
    // teaches that subject and who is not in full capacity.If all of
    // the teachers are in full capacity log to the console “Sorry,
    //     no available teachers left”.


    assignStudent(studentId, subject) {
        let teachers = [];
        school.teachers.forEach(e => {
            e.subjects.forEach(sub => {
                if (sub === subject) {

                    teachers = [...teachers, e];
                }

            })

        });
        let student = {};
        school.students.forEach(stu => {
            if (stu.id === studentId) {
                student = { ...stu };
            }
        });
        if (student) {
            for (const teacher of teachers) {
                if (teacher.capacityLeft !== 0) {


                    if (!teacher.students.filter((a) => a.id === student.id)[0]) {

                        teacher.students = [...teacher.students, student];
                        teacher.capacityLeft -= 1;;
                        console.log(teacher.capacityLeft);
                        return "student added";

                    } else {
                        return "student all ready exist!!";
                    }

                }

            }
            return "Sorry,no available teachers left";
        }
        return "student not found";

    },

    assignAllStudents(subject) {
        let massage = '';
        for (const student of this.students) {
            console.log(student);
            massage = this.assignStudent(student.id, subject);
            console.log(massage);

        }
        return massage;
    },

    // 3. A method called “assignTeachersSubject” that takes two
    // arguments, the teacher’s id, a new subject.
    // Assign the new subject to that particular teacher if that
    // subject doesn’t exist in their array of subjects



    assignTeachersSubject(teachersId, newSubject) {
        let teacher = this.teachers.filter(t => t.id === teachersId)[0];

        teacher.subjects = [...teacher.subjects, newSubject];

    },
    // 4. Create a new method of anything you want.

    addStudent(student){
        let massage ='';
        let exist =false;
        this.students.forEach(stud=>{
            if((stud.id === student.id)){
               exist=true;
            }
        })
        if(exist){
            massage = "student all ready exist"

        }else{
            this.students = [...this.students, student];
            massage = "student registered"

        }
        return massage;
    }

};

// console.log(school.findPerson('Students', 13, school));
// school.assignAllStudents("chemistry");
// school.assignTeachersSubject(1, 'sports');
// console.log(school.teachers);
// console.log(school.addStudent({ id: 15643, name: "wajde", age: 23}));
// console.log(school.students);
















const StudentInfo = ({ name, grade, school }) => {
  return (
    <h4>
      Student Name: {name} , Grade: {grade}, School:{school}
    </h4>
  );
};

const TeacherInfo = ({ teacher, subject, className }) => {
  return (
    <p>
      TeacherName: {teacher}, Subject:{subject} , ClassName:{className}{" "}
    </p>
  );
};

const CourseInfo = ({ courseName, duration, instructor }) => {
  return (
    <p>
      Course:{courseName}, Duration:{duration}, Instructor:{instructor}{" "}
    </p>
  );
};

const ScientistInfo = ({ scientists, invention }) => {
  return (
    <p>
      Scientists:{scientists}, Invention:{invention}
    </p>
  );
};

const LibraryInfo = ({ libraryName, librarian, timing, books }) => {
  return (
    <p>
      Library:{libraryName}, Librarian:{librarian}, Timing:{timing}, Books:
      {books}{" "}
    </p>
  );
};

const SubjectInfo = ({ subjectName, teacher, marks }) => {
  return (
    <p>
      Subject:{subjectName}, Teacher:{teacher}, Marks:{marks}{" "}
    </p>
  );
};

const UniversityInfo= ({universityName,city,ranking}) =>{
    return(
        <p>
            University:{universityName}, City:{city}, Ranking:{ranking}
            </p>
    );
};

const Education = (data) => {
  return (
    <>
      <StudentInfo name="Minahil" grade="12th" school="GCUF School" />

      <TeacherInfo teacher="Sara" subject="Computer science" className="10th" />

      <CourseInfo
        courseName="React.js"
        duration="3 months"
        instructor="Mouzam Ali"
      />

      <ScientistInfo scientists="Louis Pasteur" invention="Pasteurization" />

      <LibraryInfo
        libraryName="GCUF Central library"
        librarian="Ali Raza"
        timing="8 AM - 6 PM"
        books="5000"
      />

      <SubjectInfo
        subjectName="Mathematics"
        teacher="Sana Nawaz"
        marks="76/100"
      />
    
<UniversityInfo
     universityName="Punjab university"
     city="lahore"
     ranking="Top 10"
         />
     </>
   );
};

export default Education;

const studentsStr = `<list>
                        <student>
                            <name lang="en">
                                <first>Ivan</first>
                                <second>Ivanov</second>
                            </name>
                            <age>35</age>
                            <prof>teacher</prof>
                        </student>
                        <student>
                            <name lang="ru">
                                <first>Петр</first>
                                <second>Петров</second>
                            </name>
                            <age>58</age>
                            <prof>driver</prof>
                        </student>
                    </list>`;

const parser = new DOMParser();

let studentsXML = parser.parseFromString(studentsStr, "text/xml");

let studentsListNode = studentsXML.querySelector("list");

let firstStudentNode = studentsListNode.querySelector("student:first-of-type");
let firstStudentNameNode = firstStudentNode.querySelector("name");
let firstStudentFirstNameNode = firstStudentNameNode.querySelector("first");
let firstStudentSecondNameNode = firstStudentNameNode.querySelector("second");
let firstStudentAge = firstStudentNode.querySelector("age");
let firstStudentProfession = firstStudentNode.querySelector("prof");

let secondStudentNode = studentsListNode.querySelector("student:last-of-type");
let secondStudentNameNode = secondStudentNode.querySelector("name");
let secondStudentFirstNameNode = secondStudentNameNode.querySelector("first");
let secondStudentSecondNameNode = secondStudentNameNode.querySelector("second");
let secondStudentAge = secondStudentNode.querySelector("age");
let secondStudentProfession = secondStudentNode.querySelector("prof");
                    
let studentsObj = {
    list: [
        { name: `${firstStudentFirstNameNode.textContent} ${firstStudentSecondNameNode.textContent}`, age: firstStudentAge.textContent, prof: firstStudentProfession.textContent, lang: firstStudentNode.getAttribute("lang")},
        { name: `${secondStudentFirstNameNode.textContent} ${secondStudentSecondNameNode.textContent}`, age: secondStudentAge.textContent, prof: secondStudentProfession.textContent, lang: secondStudentNode.getAttribute("lang")}
    ]
};

console.log(studentsObj);

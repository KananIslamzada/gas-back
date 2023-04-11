const users = [];

const students = [
    {
        name: "Alice",
        surname: "Anderson",
        school: "School No. 3"
    },
    {
        name: "Bob",
        surname: "Baker",
        school: "School No. 3"
    },
    {
        name: "Charlie",
        surname: "Carter",
        school: "School No. 3"
    },
    {
        name: "David",
        surname: "Davis",
        school: "School No. 3"
    },
    {
        name: "Emily",
        surname: "Edwards",
        school: "School No. 3"
    },
    {
        name: "Frank",
        surname: "Foster",
        school: "School No. 3"
    },
    {
        name: "Grace",
        surname: "Garcia",
        school: "School No. 3"
    },
    {
        name: "Henry",
        surname: "Harris",
        school: "School No. 3"
    },
    {
        name: "Isabella",
        surname: "Irwin",
        school: "School No. 3"
    },
    {
        name: "Jacob",
        surname: "Jones",
        school: "School No. 3"
    },
    {
        name: "Katie",
        surname: "Kim",
        school: "School No. 3"
    },
    {
        name: "Liam",
        surname: "Lee",
        school: "School No. 3"
    },
    {
        name: "Mia",
        surname: "Martinez",
        school: "School No. 3"
    },
    {
        name: "Nathan",
        surname: "Nguyen",
        school: "School No. 3"
    },
    {
        name: "Olivia",
        surname: "O'Brien",
        school: "School No. 3"
    },
    {
        name: "Patrick",
        surname: "Park",
        school: "School No. 3"
    },
    {
        name: "Quinn",
        surname: "Queen",
        school: "School No. 3"
    },
    {
        name: "Rachel",
        surname: "Ross",
        school: "School No. 3"
    },
    {
        name: "Samuel",
        surname: "Scott",
        school: "School No. 3"
    },
    {
        name: "Tara",
        surname: "Taylor",
        school: "School No. 3"
    }
]

const questions = [
    {
        question: "How are you?",
        bgColor: "green",
        students: students.slice(0, 4)
    },
    {
        question: "How are you?",
        bgColor: "blue",
        students: students.slice(4, 8)
    },
    {
        question: "How are you?",
        bgColor: "yellow",
        students: students.slice(12, 16)
    },
    {
        question: "How are you?",
        bgColor: "red",
        students: students.slice(16, 20)
    },
]

module.exports = {
    users,
    students,
    questions
}
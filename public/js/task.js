document.addEventListener("DOMContentLoaded", () => {
  const taskCards = document.querySelectorAll(".task-card"); // Changed id selector to class selector
  const popUp = document.querySelector('#task-popup');
  const close = document.querySelector('#popup-close');

  close.addEventListener("click", (event) => {
    event.preventDefault();
    popUp.classList.add('hidden');
  });

  taskCards.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const taskIndex = link.getAttribute("data-task-index"); // Changed id to data attribute
      const taskBody = link.getAttribute("data-task-body");   // Changed id to data attribute
      const taskTitle = link.getAttribute("data-task-title"); // Changed id to data attribute
      const taskProgress = link.getAttribute("data-task-progress"); // Changed id to data attribute
      const taskId = link.getAttribute("data-task-id")
      if (taskProgress === "in_review") {
        document.querySelector('.in-review').classList.remove('hidden');
        document.querySelector('.completed').classList.add('hidden');
        document.querySelector('.submit').classList.add('hidden');
        document.querySelector('.upload').classList.add('hidden');
      } else if (taskProgress === "completed") {
        document.querySelector('.completed').classList.remove('hidden');
        document.querySelector('.in-review').classList.add('hidden');
        document.querySelector('.submit').classList.add('hidden');
        document.querySelector('.upload').classList.add('hidden');
      } else {
        document.querySelector('.completed').classList.add('hidden');
        document.querySelector('.in-review').classList.add('hidden');
        document.querySelector('.submit').classList.remove('hidden');
        document.querySelector('.upload').classList.remove('hidden');
      }

      document.querySelector('#title-popup').innerHTML = taskTitle;
      document.querySelector('#body-popup').innerHTML = taskBody;
      document.querySelector('#textarea').setAttribute("placeholder", "paste kode anda disini atau paste link project anda dari codepen atau replit");
      const submit = document.querySelector('#submit-form')
      submit.setAttribute("action", `/task-answer?taskIndex=${taskId}`); // Fixed dynamic action assignment
      submit.addEventListener("click", (e)=>{
        console.log("click")
      })
      popUp.classList.remove("hidden");
    });
  });
});
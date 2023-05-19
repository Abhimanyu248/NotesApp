shownotes();
    let AddBtn = document.getElementById("AddBtn");
    AddBtn.addEventListener("click", function (e) {
      let text = document.getElementById("textBox");
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        noteObj = [];
      } else {
        noteObj = JSON.parse(notes);
      }
      noteObj.push(text.value);
      localStorage.setItem("notes", JSON.stringify(noteObj));
      text.value = "";
      shownotes();
    });

    function shownotes() {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        noteObj = [];
      } else {
        noteObj = JSON.parse(notes);
      }
      let html = "";
      noteObj.forEach(function (element, index) {
        html += `<div class="notes">
          <h5>Note ${index + 1}</h5>
          <p>${element}</p>
          <button type="submit" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
        </div>`;
      });
      let noteclass = document.getElementById("noteBox");
      if (noteObj.length != 0) {
        noteclass.innerHTML = html;
      } else {
        noteclass.innerHTML = `No notes to show. Add notes!`;
      }
    }

    function deleteNote(index) {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        noteObj = [];
      } else {
        noteObj = JSON.parse(notes);
      }
      noteObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(noteObj));
      shownotes();
    }
    let srchBox = document.getElementById("srchBox");
    srchBox.addEventListener("input", function () {
      let srchVal = srchBox.value;
      let notes = document.getElementsByClassName("notes");
      Array.from(notes).forEach(function (element) {
        let cardtext = element.getElementsByTagName("p")[0].innerText;
        if (cardtext.includes(srchVal)){
          element.style.display = "block";
        } 
        else {
          element.style.display = "none";
        }
      });
    });
const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // 폼 기본 동작 방지

    // 입력된 데이터 가져오기
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const motive = document.querySelector('#motive').value;
    const portfolio = document.querySelector('#portfolio').value;

    // Firestore에 데이터 저장
    db.collection("applications").add({
      name: name,
      age: age,
      email: email,
      phone: phone,
      motive: motive,
      portfolio: portfolio
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      form.reset(); // 폼 초기화
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  });
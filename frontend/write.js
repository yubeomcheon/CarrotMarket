const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: new FormData(form),
    });
    const data = await res.json();
    if (data == "200") window.location.pathname = "/"; // 제출이 완료되면 루트페이지로 이동
  } catch (e) {
    console.error("이미지 업로드에 실패했습니다.");
  }
};

form.addEventListener("submit", handleSubmitForm);

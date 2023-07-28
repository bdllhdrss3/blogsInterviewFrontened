import React, { useState, useEffect } from "react";
import { Button, Modal, Label, TextInput, Spinner } from "flowbite-react";

export default function OptinMessage() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let modalValue = localStorage.getItem("openmodal");
    console.log(modalValue);
    if (modalValue === null) {
      localStorage.setItem("openmodal", "true");
    }
    if (modalValue === "true") {
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(true);
      }, 500);
    }
  }, []);

  const handleCloseModal = () => {
    localStorage.setItem("openmodal", "false");
    setOpenModal(false);
  };
  const subscribe = () => {
    setLoading(true);
    fetch(`https://blog-phyw.onrender.com/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) =>
        alert("Error: Couldnt subscribe you at the moment, try again later ")
      )
      .finally(() => {
        setLoading(false);
        setOpenModal(false);
        localStorage.setItem("openmodal", "false");
      });
  };
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidEmail = email.trim() !== "" && isEmailValid(email);
  return (
    <>
      {openModal && (
        <Modal show={true} onClose={handleCloseModal}>
          <Modal.Header className="text-center">
            <h3 className="text-center">Subscribe</h3>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base text-center leading-relaxed text-gray-700 dark:text-gray-400">
                Enjoying the blogs! Join our subscription list.
              </p>
              <p className="text-center leading-relaxed text-gray-500 dark:text-gray-400">
                (this dialog only loads at the first website visit)
              </p>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="text-center">
            {loading ? (
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                <Spinner aria-label="Default status example" />
              </h5>
            ) : (
              <Button onClick={subscribe} disabled={!isValidEmail}>
                Subscribe
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

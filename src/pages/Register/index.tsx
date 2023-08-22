import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css"
import Step1 from "../../components/RegSteps/Step1";
import Step2 from "../../components/RegSteps/Step2";

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleStep1Next = () => {
    setStep(2);
  };

  const handleStep2Previous = () => {
    setStep(1);
  };

  const handleStep2Complete = () => {  
    setTimeout(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/login"); // Redirecionar para a página de login após o cadastro bem-sucedido
    }, 1000);
  };

  return (
    <div className={styles.Register}>
      {step === 1 && <Step1 onNext={handleStep1Next} />}
      {step === 2 && (
        <Step2 onPrevious={handleStep2Previous} onComplete={handleStep2Complete} />
      )}

    </div>
  );
};

export default Register;
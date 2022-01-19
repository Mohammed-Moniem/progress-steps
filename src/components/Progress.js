import React, { useState } from "react";
import styled from "styled-components";

const Progress = () => {
  const [step, setStep] = useState(1);
  return (
    <ProgressWrapper>
      <div className="container">
        <div className="progress-container">
          <div
            className="progress"
            id="progress"
            style={{
              width: `${((step - 1) / 3) * 100 + "%"}`,
            }}
          ></div>
          <div className="circle active">1</div>
          <div className={`circle ${step >= 2 && "active"}`}>2</div>
          <div className={`circle ${step >= 3 && "active"}`}>3</div>
          <div className={`circle ${step === 4 && "active"}`}>4</div>
        </div>

        <button
          className="btn"
          id="prev"
          disabled={step === 1}
          onClick={() => step !== 1 && setStep(step - 1)}
        >
          Prev
        </button>
        <button
          className="btn"
          id="next"
          disabled={step === 4}
          onClick={() => step !== 4 && setStep(step + 1)}
        >
          Next
        </button>
      </div>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  .container {
    text-align: center;
  }

  .progress-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;
  }

  .progress-container::before {
    content: "";
    background-color: var(--line-border-empty);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }

  .progress {
    background-color: var(--line-border-fill);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0%;
    z-index: -1;
    transition: 0.4s ease;
  }

  .circle {
    background-color: #fff;
    color: #999;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--line-border-empty);
    transition: 0.4s ease;
  }

  .circle.active {
    border-color: var(--line-border-fill);
  }

  .btn {
    background-color: var(--line-border-fill);
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn:focus {
    outline: 0;
  }

  .btn:disabled {
    background-color: var(--line-border-empty);
    cursor: not-allowed;
  }
`;

export default Progress;

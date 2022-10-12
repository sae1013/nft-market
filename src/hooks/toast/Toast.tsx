import React from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import styled from "styled-components";
import store from "./store";

const ToastContainer = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

interface positionStyle {
  height?: string | number;

  // [key:string]:string | number
}

interface positionReturnType {
  height?: string | number;
}

function Toast() {
  const [state, dispatch] = store();
  const toasts = state.toasts;

  return (
    <ToastContainer>
      <Reorder.Group axis={"y"} values={toasts} onReorder={() => {}}>
        {toasts.map((toast, idx) => {
          let height = 50;
          let offset = height * idx;

          return (
            <Reorder.Item
              style={{
                zIndex: "999999",
                position: "absolute",
                listStyle: "none",
                ...toast.option?.wrapperStyle,
              }}
              key={toast.id}
              value={toast.message}
              dragListener={false}
              animate={{ y: 30 }}
              exit={{ y: -30 }}
            >
              <div
                style={{
                  transform: `translateY(${offset}px)`,
                  ...toast.option?.toastStyle,
                }}
              >
                {toast.message}
              </div>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </ToastContainer>
  );
}

export default Toast;

// store.js
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            token: null, // 토큰을 저장할 초기 상태
            username: null,

            // 토큰과 사용자 역할을 설정하는 액션
            setAuth: ({ token, username }) => set({ token, username }),

            // 로그아웃 시 토큰과 사용자 역할을 제거하는 액션
            logout: () => {
                set({ token: null, username: null });
            },
        }),
        {
            name: "auth-storage", // 로컬 스토리지에 저장될 때 사용될 키 이름 (고유해야 함)
            storage: createJSONStorage(() => localStorage), // (선택 사항) 기본적으로 'localStorage'를 사용합니다.
        }
    )
);

export default useAuthStore;

import { defineStore } from "pinia";

export const useCarStore = defineStore("car", {
    state: () => ({
        body: "/images/body1.png",
        wheels: "/images/wheel.png",
        engine: "/images/engine1.png",
        spoiler: "",
    }),
    actions: {
        set(body, wheels, engine, spoiler) {
            this.body = body;
            this.wheels = wheels;
            this.engine = engine;
            this.spoiler = spoiler;
        },
    },
});

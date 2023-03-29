import { defineStore } from "pinia";

export const useCarStore = defineStore("car", {
    state: () => ({
        body: "/images/body1.png",
        wheels: "/images/wheel.png",
        engineStep: 0,
        engine: "/images/engine1.png",
        spoiler: "",
        spoilerStep: 0,
        step: 10
    }),
    actions: {
        set(body, wheels, engine, spoiler, step, spoilerStep, engineStep) {
            this.body = body;
            this.wheels = wheels;
            this.engine = engine;
            this.engineStep = engineStep;
            this.spoiler = spoiler;
            this.spoilerStep = spoilerStep;
            this.step = step;
        },
    },
});

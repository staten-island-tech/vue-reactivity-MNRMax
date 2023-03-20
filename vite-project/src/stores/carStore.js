import { defineStore } from "pinia";

export const useCarStore = defineStore("car", {
    state: () => ({
        body: 0,
        wheels: "Eduardo",
        engine: "Eduardo",
        spoiler: "Eduardo",
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

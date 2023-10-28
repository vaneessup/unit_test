import { obtenerRobots } from "./arreglos";

describe('pruebas de arreglos',()=>{
    it('Debe retornar 3 robots', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe existir Vanessa y Marjorie', () => {
        const res = obtenerRobots();
        expect(res).toContain('Vanessa');
        expect(res).toContain('Sindy');
        expect(res).toContain('Marjorie');
        expect(res).toContain('Erickson');


    });
})
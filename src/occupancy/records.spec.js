import { setActivePinia, createPinia } from 'pinia'
import { useRecords } from './records.js'

describe('records', () => {
    beforeEach(() => {
        const pinia = createPinia()
        setActivePinia(pinia)
    });

    it('should initialize with the correct capacity', () => {
        const { capacity } = useRecords();
        expect(capacity).toBeGreaterThan(0);
        expect(capacity).toBe(120);
    });

    it('should initialize with the correct floors', () => {
        const { floors } = useRecords();
        expect(floors).toEqual([
            "Penthouse",
            "Floor 2",
            "Floor 1",
            "Ground",
            "Basement"
        ]);
    });

    it('should generate history data with the correct format', () => {
        const { history } = useRecords();
        expect(history[0]).toMatchObject({
            time: expect.any(Date),
            peopleCount: expect.any(Number),
            floor: expect.any(String)
        });
    });

    // it('should filter history by selected floor', () => {
    // });

    // it('should not filter history when selected floor is null', () => {
    // });
});
import { formatNumber } from "../formatNumber";

describe("formatNumber", () => {
    describe("billions formatting", () => {
        it("should format billions with 'b' suffix", () => {
            expect(formatNumber(1000000000)).toBe("1b");
            expect(formatNumber(1500000000)).toBe("1.5b");
            expect(formatNumber(2300000000)).toBe("2.3b");
        });

        it("should format large billions correctly", () => {
            expect(formatNumber(15000000000)).toBe("15b");
            expect(formatNumber(999999999999)).toBe("1000b");
        });
    });

    describe("millions formatting", () => {
        it("should format millions with 'm' suffix", () => {
            expect(formatNumber(1000000)).toBe("1m");
            expect(formatNumber(1500000)).toBe("1.5m");
            expect(formatNumber(2300000)).toBe("2.3m");
        });

        it("should format large millions correctly", () => {
            expect(formatNumber(999000000)).toBe("999m");
            expect(formatNumber(500000000)).toBe("500m");
        });
    });

    describe("thousands formatting", () => {
        it("should format thousands with 'k' suffix", () => {
            expect(formatNumber(1000)).toBe("1k");
            expect(formatNumber(1500)).toBe("1.5k");
            expect(formatNumber(2300)).toBe("2.3k");
        });

        it("should format large thousands correctly", () => {
            expect(formatNumber(999000)).toBe("999k");
            expect(formatNumber(500000)).toBe("500k");
        });
    });

    describe("regular numbers", () => {
        it("should format numbers less than 1000 without suffix", () => {
            expect(formatNumber(0)).toBe("0");
            expect(formatNumber(1)).toBe("1");
            expect(formatNumber(100)).toBe("100");
            expect(formatNumber(999)).toBe("999");
        });

        it("should handle decimal numbers less than 1000", () => {
            expect(formatNumber(1.5)).toBe("1.5");
            expect(formatNumber(99.9)).toBe("99.9");
            expect(formatNumber(123.456)).toBe("123.5");
        });
    });

    describe("decimal precision", () => {
        it("should respect custom digits parameter", () => {
            expect(formatNumber(1234, 0)).toBe("1k");
            expect(formatNumber(1234, 1)).toBe("1.2k");
            expect(formatNumber(1234, 2)).toBe("1.23k");
            expect(formatNumber(1234, 3)).toBe("1.234k");
        });

        it("should handle precision for millions", () => {
            expect(formatNumber(1234567, 0)).toBe("1m");
            expect(formatNumber(1234567, 1)).toBe("1.2m");
            expect(formatNumber(1234567, 2)).toBe("1.23m");
        });

        it("should handle precision for billions", () => {
            expect(formatNumber(1234567890, 0)).toBe("1b");
            expect(formatNumber(1234567890, 1)).toBe("1.2b");
            expect(formatNumber(1234567890, 2)).toBe("1.23b");
        });
    });

    describe("trailing zeros cleanup", () => {
        it("should remove trailing zeros after decimal", () => {
            expect(formatNumber(1000)).toBe("1k");
            expect(formatNumber(2000000)).toBe("2m");
            expect(formatNumber(3000000000)).toBe("3b");
        });

        it("should keep significant decimals and remove trailing zeros", () => {
            expect(formatNumber(1100, 2)).toBe("1.1k");
            expect(formatNumber(1010, 2)).toBe("1.01k");
            expect(formatNumber(1001, 3)).toBe("1.001k");
        });
    });

    describe("negative numbers", () => {
        it("should handle negative thousands", () => {
            expect(formatNumber(-1000)).toBe("-1k");
            expect(formatNumber(-1500)).toBe("-1.5k");
        });

        it("should handle negative millions", () => {
            expect(formatNumber(-1000000)).toBe("-1m");
            expect(formatNumber(-2500000)).toBe("-2.5m");
        });

        it("should handle negative billions", () => {
            expect(formatNumber(-1000000000)).toBe("-1b");
            expect(formatNumber(-5500000000)).toBe("-5.5b");
        });

        it("should handle negative numbers less than 1000", () => {
            expect(formatNumber(-1)).toBe("-1");
            expect(formatNumber(-100)).toBe("-100");
            expect(formatNumber(-999)).toBe("-999");
        });
    });

    describe("edge cases", () => {
        it("should handle zero", () => {
            expect(formatNumber(0)).toBe("0");
            expect(formatNumber(-0)).toBe("0");
        });

        it("should handle very small numbers", () => {
            expect(formatNumber(0.1)).toBe("0.1");
            expect(formatNumber(0.01)).toBe("0");
        });

        it("should handle numbers just below thresholds", () => {
            expect(formatNumber(999)).toBe("999");
            expect(formatNumber(999999)).toBe("1000k");
            expect(formatNumber(999999999)).toBe("1000m");
        });
    });

    describe("invalid inputs", () => {
        it("should return '0' for NaN", () => {
            expect(formatNumber(NaN)).toBe("0");
        });

        it("should return '0' for non-number types", () => {
            expect(formatNumber("1000" as any)).toBe("0");
            expect(formatNumber(null as any)).toBe("0");
            expect(formatNumber(undefined as any)).toBe("0");
            expect(formatNumber({} as any)).toBe("0");
            expect(formatNumber([] as any)).toBe("0");
        });
    });

    describe("real-world examples", () => {
        it("should format social media counts correctly", () => {
            expect(formatNumber(1234)).toBe("1.2k"); // 1.2k followers
            expect(formatNumber(45678)).toBe("45.7k"); // 45.7k likes
            expect(formatNumber(1234567)).toBe("1.2m"); // 1.2m views
            expect(formatNumber(9876543210)).toBe("9.9b"); // 9.9b population
        });

        it("should format file sizes", () => {
            expect(formatNumber(1024, 0)).toBe("1k");
            expect(formatNumber(1536, 1)).toBe("1.5k");
            expect(formatNumber(1048576, 0)).toBe("1m");
        });
    });
});


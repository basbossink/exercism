package hamming

import (
	"testing"
)

func TestHamming(t *testing.T) {
	for _, tc := range testCases {

		observed := Distance(tc.s1, tc.s2)

		if tc.want != observed {
			t.Fatalf(`
{%v,%v}
expected: %v
observed: %v`,
				tc.s1,
				tc.s2,
				tc.want,
				observed,
			)
		}
	}
}

func BenchmarkHamming(b *testing.B) {
	b.StopTimer()

	for _, tc := range testCases {
		b.StartTimer()

		for i := 0; i < b.N; i++ {
			Distance(tc.s1, tc.s2)
		}

		b.StopTimer()
	}
}

#!/bin/bash
# Checks every external school website link in src/lib/schools.ts.
# Prints only non-2xx results. Runs 4 at a time (more causes timeout false positives).
cd "$(dirname "$0")/.." || exit 1
check() {
  url="$1"
  code=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 25 \
    -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36" \
    "$url" 2>/dev/null)
  case "$code" in
    2*) ;;
    *) printf "%-6s %s\n" "$code" "$url" ;;
  esac
}
export -f check

urls=$(grep -oE 'website: "https?://[^"]+"' src/lib/schools.ts | sed -E 's/website: "(.*)"/\1/')
echo "Checking $(echo "$urls" | wc -l | tr -d ' ') school website links..."
echo
printf "%-6s %s\n" CODE URL
echo "$urls" | xargs -P 4 -I{} bash -c 'check "{}"'

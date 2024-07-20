npm init playwright@latest // install playwright \
npx playwright test // execute test case \
npx playwright show-report // show report \
npx playwright test --project=chromium // execute test case \
npx playwright test --project=chromium --headed // execute test case headless \
npx playwright test example.spec.ts --project=chromium // execute example.spec.ts file \
npx playwright test -g "has title" --project=chromium // execute test case name "has title" \
npx playwright test --ui // execute test on UI mode \
npx playwright test --project=chromium --trace on // execute test on trace mode \
npx playwright test --project=chromium --debug // execute test on debug mode    \ 
npx playwright test --update-snapshots // update snapshot for visual testing    \
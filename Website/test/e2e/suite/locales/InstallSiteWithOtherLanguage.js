var resetSite = require('../../reset.js');

module.exports = {
	'@tags': ['install'],
	before: function (browser, done) {
		resetSite(function (err) {
			if (err) {
				browser.end();
				console.error(err);
				process.exit(1);
			}
			done();
		});
	},
	beforeEach: function (browser) {
    // 1  Launch an uninitialized website.
		browser
      .url(browser.launchUrl + '/Composite/top.aspx')
      .waitForElementVisible('.welcomepage', browser.globals.timeouts.basic);
	},
	'install Venus starter site': function (browser) {
		browser.installWebsite('en-US', 'French (CA)', 'fr-CA')
	}
}

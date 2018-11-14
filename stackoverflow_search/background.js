browser.omnibox.onInputChanged.addListener(text_typed);

browser.omnibox.onInputEntered.addListener(text_entered);

function text_entered(entered_text, disposition) {
    var url = 'https://stackoverflow.com/search?q=';
    url += entered_text;

    browser.tabs.update({
        url: url
    });

}

function text_typed(typed_text, suggest){
  browser.omnibox.setDefaultSuggestion({
    description: 'Searching '+typed_text+' in stackoverflow'
  });
}
/**
 * Created by VirtualSoft Academy on 17/05/2016.
 */

Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
        // return this.url;
    }
});
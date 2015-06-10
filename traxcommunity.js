$j = jQuery.noConflict();
var header = '<div class="zen"><div class="zen-headerTop zen-bgdThemed brandZeronaryBgr phHeaderCustomLogo zen-customBranding" id="appHeaderTop"><div class="zen-branding"><img src="/servlet/servlet.ImageServer?id=01515000003y4Kz&amp;oid=00D15000000hfm1" alt="" id="phHeaderLogoImage" onload="javascript:scaleImage(this, 55, 300);"></div><div class="zen-navViaSearch" role="search"><form action="/_ui/search/ui/UnifiedSearchResults" id="phSearchForm" method="GET" name="sbsearch" onsubmit="if (window.ffInAlert) { return false; }"><input type="hidden" name="searchType" id="searchType" value="2"><div class="headerSearchContainer" id="phSearchContainer"><div class="headerSearchLeftRoundedCorner"><div class="searchBoxClearContainer"><input autocomplete="off" id="phSearchInput" maxlength="100" name="str" placeholder="Search..." size="20" title="Search..." type="text" value="" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><a class="headerSearchClearButton" href="javascript: void(0);" id="phSearchClearButton" name="phSearchClearButton" style="visibility:hidden" title="Clear search terms"></a></div><div class="headerSearchRightRoundedCorner" id="searchButtonContainer"><input value="Search" id="phSearchButton" type="button"></div></div></div></form></div><div class="zen-navViaMenus"><div role="navigation"><h1 class="zen-assistiveText">Menus</h1><nav><ul class="zen-navMenus"></ul>
</nav></div></div></div></div>';


$j(document).ready(function(){
	$j('#AppBodyHeader').prepend(header);
	$j('.btn').addClass('btn-primary');
});


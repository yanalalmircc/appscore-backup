export const GET_MOBILE_APPS = `
 query($category: String) {
	mobileApps(category: $category) {
		id
		category {
			id
			name
		}
      name
      logo
      images
      description
      summary
      linkIos
      linkAndroid
      rating
      reviews
      active
	  }
  }
`;
export const GET_SINGLE_MOBILE_APP = `
 query($name: String) {
	mobileApp(name: $name) {
		id
		category {
			id
			name
		}
		name
		logo
		images
		summary
		description
		linkIos
		linkAndroid
		rating
		reviews
	}
 }
`;

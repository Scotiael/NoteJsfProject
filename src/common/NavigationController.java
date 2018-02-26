package common;

import java.io.Serializable;
import org.jboss.logging.Logger;



import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;

@ManagedBean(name = "navigationController", eager = true)
@RequestScoped

public class NavigationController implements Serializable {
	private static final Logger LOGGER = Logger.getLogger(NavigationController.class);
	   @ManagedProperty(value = "#{param.pageId}")
	   private String pageId;

	public String showPage() {
	      if(pageId == null) {
	         return "note.xhtml";
	      }
	      
	      if(pageId.equals("home")) {
	         return "note.xhtml";
	      }
	      if(pageId.equals("addNote")) {
	         return "addNote.xhtml";
	      }
	      if(pageId.equals("dashboardNote")){
	         return "dashboardNote.xhtml";
	      }
	    	 return "note.xhtml";
	      
	}
	

	   
	   public String getPageId() {
		return pageId;
	}

	public void setPageId(String pageId) {
		this.pageId = pageId;
	}
}
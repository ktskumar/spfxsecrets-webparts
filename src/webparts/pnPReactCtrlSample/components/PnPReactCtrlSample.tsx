import * as React from 'react';
import styles from './PnPReactCtrlSample.module.scss';
import { IPnPReactCtrlSampleProps } from './IPnPReactCtrlSampleProps';
import { IPnPReactCtrlSampleState } from './IPnPReactCtrlSampleState';
import { escape } from '@microsoft/sp-lodash-subset';
//Import PnP JS
import { sp } from '@pnp/sp';
//Import PnP React Controls
import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";


export default class PnPReactCtrlSample extends React.Component<IPnPReactCtrlSampleProps, IPnPReactCtrlSampleState> {
  private _viewFields: IViewField[] = [
    {
      name: "Id",
      displayName: "ID",
      maxWidth: 25,
      minWidth: 25,
      sorting: true
    },
    {
      name: "File.Name",
      linkPropertyName: "File.ServerRelativeUrl",
      displayName: "Name",
      sorting: true
    },
    {
      name: "File.TimeCreated",
      displayName: "Created",
      minWidth: 150,
      render: (item: any) => {
        const created = item["File.TimeCreated"];
        if (created) {
          const createdDate = created;
          return <span>{createdDate}</span>;
        }
      }
    }
  ];

  constructor(props: IPnPReactCtrlSampleProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      items: []
    };
  }

  public componentDidMount() {
    if (this.props.list != null && this.props.list != "") {
      this.getListItems();
    }
  }

  public componentDidUpdate(prevProps: IPnPReactCtrlSampleProps, prevState: IPnPReactCtrlSampleState) {      
    if (this.props.list != prevProps.list) {
      if (this.props.list != null && this.props.list != "") {
        this.getListItems();
      } else {
        this.setState({
          items: []
        });
      }
    }
  }



  private getListItems() {
    sp.web.lists.getById(this.props.list.toString()).items.filter('FSObjType eq 0').expand('File').get()
      .then(resp => { return resp; })
      .then(items => {        
        this.setState({
          items: items ? items : []
        });
      });
  }
  private _onConfigure() {
    // Context of the web part    
    this.props.context.propertyPane.open();
  }



  public render(): React.ReactElement<IPnPReactCtrlSampleProps> {

    if (this.props.list == null || this.props.list == "") {
      return (
        <Placeholder
          iconName='Edit'
          iconText='List view web part configuration'
          description='Please configure the web part before you can show the list view'
          buttonLabel='Configure'
          onConfigure={this._onConfigure.bind(this)} />
      );
    } else {
      return (
        <div className={styles.pnPReactCtrlSample}>
          {
            this.state.items.length === 0 ?
              <Placeholder
                iconName="InfoSolid"
                iconText="No items found"
                description="The list or library you selected does not contain items."
              />
              :
              <div>
                <WebPartTitle displayMode={this.props.displayMode}
                  title={this.props.description}
                  updateProperty={this.props.updateProperty} />
                <ListView
                  items={this.state.items}
                  viewFields={this._viewFields}
                  iconFieldName="File.ServerRelativeUrl"
                  compact={true}
                />
              </div>
          }
        </div>
      );
    }

  }
}
